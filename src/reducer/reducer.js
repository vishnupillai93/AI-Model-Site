export function reducer(state, action) {
  switch (action.type) {
    case "Update-Likes":
      return { ...state, ...action.payload };
    case "Add-Model":
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
