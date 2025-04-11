//considering i have the applications data

function countStatus(applications) {
    const statusCount = {};
  
    applications.forEach(app => {
      statusCount[app.status] = (statusCount[app.status] || 0) + 1;
   });
  
   return statusCount;
}
  
console.log(countStatus(applications));
  