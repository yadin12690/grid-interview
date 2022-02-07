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
          {config.map(({ component, field }, configIndex) => {// Map over table config from props
            const ComponentToRender = component ?? component; //Check and save if component field is not empty
            return (component // If component empty we render other fields
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