/**
 * Created by shiweiping on 17/04/25.
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ss_blog');


//Schema

//1、user 用户集合
var userSchema = new mongoose.Schema({
    userName: { type: 'String', required: true },
    password: { type: 'String', required: true },
    userTitle: { type: 'Number', default: 0 },
    nickName: { type: 'String', default: '匿名' },
    profile: { type: 'String', default: '这个人很懒，啥都没写，呵呵哒～' },
    eMail: { type: 'String', default: 'username@example.com' },
    headIcon: { type: 'String', default: './images/owl.png' },
    createTime: { type: 'Date', default: Date.now() }
});

//2、article 博客文章集合
var articleSchema = new mongoose.Schema({
    title: { type: 'String', required: true },
    author: { type: 'String', required: true },
    content: { type: 'String' },
    pv: { type: 'Number', default: 0 },
    tags: [],
    createTime: {},
    comments: [],
    reprintInfo: {}
});


//Model 模型

//1、user
exports.userModel = mongoose.model('users', userSchema);

//2、article
exports.articleModel = mongoose.model('articles', articleSchema);