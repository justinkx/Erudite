import React from "react"
import "./Dashboard.scss"
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts"
import { scaleOrdinal } from "d3-scale"
import { schemeCategory10 } from "d3-scale-chromatic"
const colors = scaleOrdinal(schemeCategory10).range()

const data = [
  {
    name: "Gov",
    perf: 81,
  },
  {
    name: "Pvt",
    perf: 93,
  },
  {
    name: "IHRD",
    perf: 66,
  },
]

const getPath = (x, y, width, height) => `M${x},${y + height}
          C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${
  x + width / 2
}, ${y}
          C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${
  y + height
} ${x + width}, ${y + height}
          Z`

const TriangleBar = props => {
  const { fill, x, y, width, height } = props

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />
}

function PerformanceCard() {
  return (
    <div className="perf-container">
      <div className="content-row">
        <h5 class="perf-card-title">School Performance</h5>
        <span>All the data in percentage(%)</span>
      </div>
      <div className="content-row">
        <BarChart
          width={400}
          height={250}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Bar
            dataKey="perf"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      </div>
    </div>
  )
}

export default PerformanceCard
