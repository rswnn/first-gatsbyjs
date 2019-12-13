import React, { Component } from "react"
import "../assets/index.scss"

export default class index extends Component {
  state = {
    nilaiSatu: "",
    nilaiDua: "",
    hasil: 0,
    value: "tambah",
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  result = (a, b) => {
    switch (this.state.value) {
      case "tambah":
        this.setState({
          hasil: parseInt(a) + parseInt(b),
        })
        break
      case "kali":
        this.setState({
          hasil: parseInt(a) * parseInt(b),
        })
        break
      case "bagi":
        this.setState({
          hasil: parseFloat(a) / parseFloat(b),
        })
        break
      case "kurang":
        this.setState({
          hasil: parseFloat(a) - parseFloat(b),
        })
        break
      default:
        break
    }
  }

  changeDropdown = event => {
    this.setState({ value: event.target.value })
  }
  render() {
    const { nilaiSatu, nilaiDua, hasil, value } = this.state
    return (
      <div className="container">
        <h1 className="hasil">{hasil}</h1>
        <div className="divide">
          <div className="value">
            <h1>Nilai 1</h1>
            <input
              type="number"
              onChange={this.handleChange}
              name="nilaiSatu"
              value={nilaiSatu}
              placeholder="Nilai 1"
            />
          </div>
          <div className="form-dropdown">
            <select
              className="select-css"
              onChange={this.changeDropdown}
              value={value}
            >
              <option value="tambah">+</option>
              <option value="kali">*</option>
              <option value="bagi">/</option>
              <option value="kurang">-</option>
            </select>
          </div>
          <div className="value">
            <h1>Nilai 2</h1>
            <input
              type="number"
              name="nilaiDua"
              value={nilaiDua}
              onChange={this.handleChange}
              placeholder="Nilai 2"
            />
          </div>
        </div>
        <button onClick={() => this.result(nilaiSatu, nilaiDua)}>Submit</button>
        <button onClick={() => this.setState({ hasil: 0 })}>Clear</button>
      </div>
    )
  }
}
