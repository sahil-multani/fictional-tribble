const allRoles = {
  user: ['me', 'getProducts', 'getCategorys'],
  admin: [
    'getUsers',
    'manageProducts',
    'getProducts',
    'manageUsers',
    'manageBlogs',
    'manageTags',
    'manageCategorys',
    'getCategorys',
    'getTags',
  ],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
