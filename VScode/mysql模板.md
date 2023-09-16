```
{
	"zsgc": {
		"prefix": "zsgc",
		"body": [
			"-- 有个users表  四个字段id username password status，四个字段代表四列,其中id为自增列，status默认值为0,可选值0，1",
			"-- id自增，username分别为zs,ls,wu  password分别为：123456 abcdef 123abc  status为0，1，1",
			"-- 查询整张表的所有数据",
			"-- select * from users",
			"-- 查询指定列的所有数据",
			"-- select username,password from users",
			"-- 指定某列添加数据",
			"-- insert into users(username,password) values('萧寂','1234')",
			"-- 指定某列修改数据",
			"-- update users set username=\"你好a\",password=\"1234567\",status=1 where id=2",
			"-- 根据id删除行",
			"-- delete from users where id=4",
			"-- 查询status为1的所有用户",
			"-- SELECT *FROM users WHERE status=1",
			"-- 查询id大于2的所有用户",
			"-- SELECT *FROM users WHERE id>2",
			"-- 查询username不等于admin的所有用户",
			"-- SELECT *FROM users WHERE username<>'admin'",
			"-- 使用AND来显示所有status为0，并且id 小于3的用户:",
			"-- SELECT * FROM users WHERE status=0 AND id<3",
			"-- 使用OR来显示所有status为1，或者username为zs的用户",
			"-- SELECT* FROM users WHERE status=1 OR username='zs'",
			"-- 对users表中的数据，按照status字段进行升序排序",
			"-- SELECT * FROM users ORDER BY status;（升序排序在status后加上ASC效果等同）",
			"-- select * from users order by status asc",
			"-- 根据id降序排序,降序排序使用desc关键字",
			"-- select * from users order by id desc",
			"-- 多重排序 对users 表中的数据，先按照status字段进行降序排序，再按照username的字母顺序，进行升序排序",
			"-- SELECT * FROM users ORDER BY status DESC,username asc",
			"-- 查询id为1的数据返回的总条数",
			"-- select count(*) from users where id=1",
			"-- 将列名称从COUNT(*)修改为total",
			"-- SELECT COUNT(*) AS total FROM users WHERE id=1",
			"-- 给username列添加uname别名，给password列添加upwd别名",
			"-- select username as uname,password as upwd from users",
		],
		"description": "Log output to console"
	}
}
```

