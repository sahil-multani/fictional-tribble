const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const { paginate } = require('./plugins');

const BlogSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    tags: {
      type: [mongoose.Types.ObjectId],
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      require: true,
    },
    slug: {
      type: String,
      require: true,
      slug: 'title',
      unique: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

BlogSchema.plugin(slug);
BlogSchema.plugin(paginate);

const Blog = mongoose.model('Blogs', BlogSchema);

module.exports = Blog;
