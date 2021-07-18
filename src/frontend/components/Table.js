import React from "react";

const Table = (props) => {
  const { thead, tcol, tdata } = props;
  return (
    <div className="col-6 border">
      <table className="table">
        <thead>
          <tr>
            {thead.map((item) => {
              return <th key={item}>{item}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {tdata &&
            tdata.map((data,index) => {
              return (
                <tr key={index}>
                  {tcol.map((col) => {
                    return <td key={data[col]}>{data[col]}</td>;
                  })}
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
