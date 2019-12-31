export function _createUser(payload) {
  return {
    type: "CREATE_USER",
    payload
  };
}

export function _updateUser(payload) {
  return {
    type: "UPDATE_USER",
    payload
  };
}

export function _deleteData(payload) {
  return {
    type: "DELETE_USER",
    payload
  };
}
