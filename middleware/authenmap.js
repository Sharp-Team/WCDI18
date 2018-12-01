export default function({ redirect, store }) {
  if (!store.state.user) {
    return redirect('/login')
  } else if (!store.state.user.phone_number) {
    return redirect('/update')
  }
}
