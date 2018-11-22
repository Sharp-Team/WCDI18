export default function({ redirect, req }) {
  console.log(req.session)
  if (!req.session.username) {
    return redirect('/')
  }
}
