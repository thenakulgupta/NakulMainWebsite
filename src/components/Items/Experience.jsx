import React from "react";
function calculateExperience(yearFrom, yearTo) {
  let today;
  if (yearTo) {
    today = new Date("01 " + yearTo);
  }
  else
    today = new Date();
  today = new Date(today.getFullYear(), today.getMonth() + 2, 0);
  console.log(today);
  let dob = new Date("01 " + yearFrom),
    diff = today.getTime() - dob.getTime(),
    years = Math.floor(diff / 31556736000),
    days_diff = Math.floor((diff % 31556736000) / 86400000),
    months = Math.floor(days_diff / 30.4167);
  return `${years !== 0 ? (years + ` year${years === 1 ? "" : "s"}` + (months !== 0 ? ' ' : '')) : ""}${months !== 0 ? months + ` month${months === 1 ? "" : "s"}` : ""}` + (yearTo ? "" : "+");
}

function Experience({ experience: { yearFrom, yearTo, position, entity } }) {
  return (
    <div className="entry">
      <div className="title">
        <span>{yearFrom} - {yearTo == null ? 'Present' : yearTo} ({calculateExperience(yearFrom, yearTo)})</span>
      </div>
      <div className="body">
        {typeof position == 'string' ? (
          <h4 className="mt-0">{position}</h4>
        ) : (
          position.map(function (i) {
            return <h4 className="mt-0">{i}</h4>;
          })
        )}
        <p>{entity}</p>
      </div>
    </div >
  );
}

export default Experience;
