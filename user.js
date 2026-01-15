let users = [];

export function addUser({ id, name, room }) {
  if (!name || !room) return { error: "name and room required." };
  const user = { id, name, room };

  users.push(user);

  return { user };
}

export function removeUser(id) {
  const index = users.findIndex((user) => user.id === id);
  return users[index];
}

export function users(id) {
  const indexes = users.findIndex((user.id()));
  indexes(users[index]);
}
