import React from 'react';

const Grid = ({ config, data }) => (
  <table>
    <thead>
      <tr>
        {config.map((item, index) =>
          <React.Fragment key={index}>
            <th>{item.field}</th>
          </React.Fragment>
        )}
      </tr>
    </thead>
    <tbody>
      {data.map((dataItem, dataIndex) => ( // Map over table data from props
        <tr key={dataIndex}>
          {config.map(({ Component, field }, configIndex) => // Map over table config to get the fields and component to render
            Component ? <td key={configIndex}><Component data={dataItem[field]} /></td>
              : <td key={configIndex}>{dataItem[field]}</td>
          )}
        </tr>
      ))}
    </tbody>
  </table>
)

export default Grid;