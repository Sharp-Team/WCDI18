export default function({ redirect, req }) {
  if (!req.session.username) {
    return redirect('/')
  }
}
