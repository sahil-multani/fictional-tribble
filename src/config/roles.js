const allRoles = {
  user: ['me', 'getProducts', 'getCategorys', 'getSubCategorys'],
  admin: [
    'getUsers',
    'manageSubCategorys',
    'getSubCategorys',
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
