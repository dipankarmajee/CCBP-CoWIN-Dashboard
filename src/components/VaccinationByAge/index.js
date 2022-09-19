import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'

const VaccinationByAge = props => {
  const {vaccinationByAge} = props
  return (
    <div>
      <h3 className="title">Vaccination by age</h3>
      <ResponsiveContainer width="100%" height={600}>
        <PieChart
          margin={{
            top: 130,
            bottom: 100,
          }}
        >
          <Pie
            cx="50%"
            cy="0%"
            data={vaccinationByAge}
            startAngle={0}
            endAngle={360}
            // innerRadius="40%"
            outerRadius="70%"
            dataKey="count"
          >
            <Cell name="18-44" fill="#5a8dee" />
            <Cell name="45-60" fill=" #a3df9f" />
            <Cell name="Above 60" fill=" #64c2a6" />
          </Pie>
          <Legend
            iconType="circle"
            layout="horizontal"
            verticalAlign="middle"
            align="center"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationByAge
