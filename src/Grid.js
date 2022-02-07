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
      {data.map((dataItem, dataIndex) => (
        <tr key={dataIndex}>
          {config.map(({ component, field }, configIndex) => {
            const ComponentToRender = component ?? component;
            return (component
              ? <td key={configIndex}><ComponentToRender data={dataItem[field]} /></td>
              : <td key={configIndex}>{dataItem[field]}</td>)
          }
          )}
        </tr>
      ))}
    </tbody>
  </table>
)

export default Grid;