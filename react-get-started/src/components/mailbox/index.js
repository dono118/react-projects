function Mailbox(props) {
  const unreadMessages = props.unreadMessages
  return (
    <div>
      {unreadMessages.length > 0 && (
        <h2>You have {unreadMessages.length} unread messages.</h2>
      )}
    </div>
  )
}
export default Mailbox
