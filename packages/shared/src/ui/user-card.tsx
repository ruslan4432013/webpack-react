type Props = {
  username: string
}

export const UserCard = ({ username }: Props) => {
  return (
    <div style={{border: '1px solid black', padding: '10px'}}>
      <div>Username: {username}</div>
      <div>Password: 123</div>
    </div>
  )
}
