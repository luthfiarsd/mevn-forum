export const checkPermission = (requestUser, resourceUserId) => {
  if (requestUser.role === "admin") {
    return;
  }

  if (requestUser.userId === resourceUserId.toString()) {
    return;
  }

  throw new Error('Unauthorized access, you can\'t modify other users\' properties')
};
