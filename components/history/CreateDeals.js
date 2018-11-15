export default function(username, time, job, status, object) {
  this.$axios
    .post(`/api/deal/create`, {
      username: username,
      time: time,
      job: job,
      status: status,
      object: object
    })
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
}
