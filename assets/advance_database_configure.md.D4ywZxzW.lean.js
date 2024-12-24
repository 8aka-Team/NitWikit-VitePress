import{_ as n,c as a,a5 as i,o as l}from"./chunks/framework.O9ad3XaM.js";const y=JSON.parse('{"title":"配置","description":"","frontmatter":{"title":"配置","slug":"/database/configure","sidebar_position":3},"headers":[],"relativePath":"advance/database/configure.md","filePath":"nitwikit/docs/advance/database/configure.md","lastUpdated":1727754229000}'),p={name:"advance/database/configure.md"};function e(t,s,h,k,c,d){return l(),a("div",null,s[0]||(s[0]=[i(`<h2 id="数据库配置" tabindex="-1">数据库配置 <a class="header-anchor" href="#数据库配置" aria-label="Permalink to &quot;数据库配置&quot;">​</a></h2><h3 id="mysql" tabindex="-1">MySQL <a class="header-anchor" href="#mysql" aria-label="Permalink to &quot;MySQL&quot;">​</a></h3><p>MySQL 的配置文件在 Windows 中，是 <code>my.ini</code> ，默认在 <code>C:\\Program Files\\MySQL\\MySQL Server X.X</code> 文件夹中</p><p>而 Linux 中，是 <code>my.cnf</code> ，默认路径为 <code>/etc/my.cnf</code></p><details><summary>示例配置文件</summary><div class="language-ini vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">[client]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">port</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=3306</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">[mysql]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">default-character-set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=utf8</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">[mysqld]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">port</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 3306</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#设置 MySQL 的端口</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">socket</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = /tmp/mysql.sock</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#设置mysql的安装目录，别动</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">basedir</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=F:\\\\Hzq Soft\\\\MySql Server 51GA</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#设置mysql数据库的数据的存放目录，如果你觉得原来存放数据库的地方不够用了可以迁到其他地方去</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#但是要注意把原来的存放目录里面的东西迁移到那个地方去</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">datadir</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=F:\\\\Hzq Soft\\\\MySql Server 51GA\\\\data</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#innodb_log_arch_dir 默认datadir</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#innodb_log_group_home_dir  默认datadir</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#设置mysql服务器的字符集，默认编码</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">default-character-set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=utf8</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#连接数的操作系统监听队列数量，如果经常出现“拒绝连接”错误可适当增加此值</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">back_log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 50</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#不使用接听TCP / IP端口方法，mysqld通过命名管道连接</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#skip-networking</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#最大连接数量</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#有时候插件会因为这个值太小而报错，建议设置大一点，比如 65536 ，甚至有时候这都不够</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">max_connections</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 90</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#打开表的线程数量限定，最大4096，除非用mysqld_safe打开限制</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">table_open_cache</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 2048</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#MySql 服务接收针对每个进程最大查询包大小</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">max_allowed_packet</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 16M</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#作用于SQL查询单笔处理使用的内存缓存，如果一笔操作的二进制数据超过了限定大小，将会在磁盘上开辟空间处理，一般设为 1-2M即可，默认1M</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">binlog_cache_size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 2M</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#单个内存表的最大值限定</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">max_heap_table_size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 64M</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#为每个线程分配的排序缓冲大小</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">sort_buffer_size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 8M</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#join 连表操作的缓冲大小，根据实际业务来设置，默认8M</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">join_buffer_size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 32M</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#操作多少个离开连接的线程的缓存</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">thread_cache_size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 8</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#并发线程数量，默认为8，可适当增加到2倍以内。如果有多个CPU可以乘 上CPU的数量。双核CPU可以乘 上当前最核数再乘 上70%-85%</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">thread_concurrency</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 16</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#专用于具体SQL的缓存，如果提交的查询与几次中的某查询相同，并且在query缓存中存在，则直接返回缓存中的结果。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">query_cache_size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 64M</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#对应上一条设置，当查询的结果超过下面设置的大小时，将不会趣入到上面设置的缓存区中，避免了一个大的结果占据大量缓存。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">query_cache_limit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 2M</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#设置加全文检索中的最小单词长度。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#ft_min_word_len = 4</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#CREATE TABLE 语句的默认表类型，如果不自己指定类型，则使用下行的类型</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">default-storage-engine</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = InnoDB</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#线程堆栈大小，mysql说它自己用的堆栈大小不超过64K。这个值可适当设高一点(在RCA的项目中都是共用同一个数据库连接的)，默认192K</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">thread_stack</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 800K</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#设置事务处理的级别，默认 REPEATABLE-READ，一般用它就即可，以下二行按顺序对应，</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#可读写未提交的数据，创建未提交的数据副本读写，未提交之前可读不可写，只允许串行序列招行事务。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># READ-UNCOMMITTED， READ-COMMITTED， REPEATABLE-READ， SERIALIZABLE</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">transaction_isolation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = REPEATABLE-READ</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#单一内存临时表在内存中的大小，超过此值自动转换到磁盘操作</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">tmp_table_size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 64M</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#启动二进制日志功能，可通过它实现时间点恢复最新的备份</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#log-bin=mysql-bin</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#二进制日志格式，对就上一条，-建议混合格式</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#binlog_format=mixed</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#对应上一条，如果一个查询超过了下条设定的时间则执行上一条。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">long_query_time</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 2</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#自定义主机ID识别符，用于主从或多服务器之间识别，为 一个 int 类型</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">server-id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#一般用来缓存MyISAM表的主键，也用于临时的磁盘表缓存主键，上面多次出现临时磁盘表，所以就算不用MyISAM也最好为其设置一个不小的值，默认32M</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">key_buffer_size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 56M</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#全表扫描MyISAM表时的缓存，每个线程拥有下行的大小。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">read_buffer_size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 2M</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#排序操作时与磁盘之间的缓存，分到每个线程，默认16M</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">read_rnd_buffer_size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 16M</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#MyISAM使用特殊树形进行批量插入时的缓存，如insert ... values(..)(..)(..)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">bulk_insert_buffer_size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 64M</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#MyISAM索引文件的最大限定，</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">myisam_max_sort_file_size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 12G</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#如果一个myisam表有一个以上的索引， MyISAM可以使用一个以上线程来排序并行它们。较耗硬件资源，如果你的环境不错，可以增加此值。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">myisam_repair_threads</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 2</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#自动检查和修复无法正确关闭MyISAM表。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">myisam_recover</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># *** INNODB Specific options ***</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#开启下条将会禁用 INNODB</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#skip-innodb</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#一般不用设置或者说设了也没多大用，InnoDB会自己与操作系统交互管理其附加内存池所使用InnoDB的存储数据的大小</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">innodb_additional_mem_pool_size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 16M</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#innodb整体缓冲池大小，不宜过大，设为本地内存的 50%-75% 比较合适，在本机开发过程中可以设得较小一点如 64M，256M</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">innodb_buffer_pool_size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 256M</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#InnoDB的数据存储在一个或多个数据文件组成的表空间</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">innodb_data_file_path</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = ibdata1:10M:autoextend</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#用于异步IO操作的线程数量，默认为 4 ，可适当提高</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">innodb_file_io_threads</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 8</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#线程数内允许的InnoDB内核，不宜太高</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">innodb_thread_concurrency</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 14</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#InnoDB的事务日志快存行为，默认为 1，为0可减轻磁盘I/0操作，还有以为2</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">innodb_flush_log_at_trx_commit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#InnoDB的用于的缓冲日志数据的大小</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">innodb_log_buffer_size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 16M</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#日志文件，可设置为25%-90%的总体缓存大小，默认 256M. 修改此项要先删除datadir\\ib_logfileXXX</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">innodb_log_file_size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 256M</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#日志组数量，默认为3</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">innodb_log_files_in_group</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 3</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#InnoDB的日志文件位置。默认是MySQL的datadir</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#innodb_log_group_home_dir</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#InnoDB最大允许的脏页缓冲池的百分比，默认90</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">innodb_max_dirty_pages_pct</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 90</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#事务死锁超时设定</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">innodb_lock_wait_timeout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 120</span></span></code></pre></div></details><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>绝对不要直接把示例配置文件直接复制粘贴进你的配置文件当中</p><p>否则有可能会导致数据库无法启动</p><p>正确的做法是看完注释之后根据自己的需要，自行去修改配置文件，然后重启或重载 MySQL 服务</p></div><p>此外，还有一些十分重要的配置项，建议修改，没有的配置项可以自行在配置文件中添加</p><div class="info custom-block"><p class="custom-block-title">INFO</p><table tabindex="0"><thead><tr><th>配置名称</th><th>作用</th><th>默认值</th><th>推荐值</th></tr></thead><tbody><tr><td><code>wait_timeout</code></td><td>此项设置 MySQL 在关闭一个非交互的连接之前所要等待的秒数，也就是一项连接如果空闲时间超过设置的值，连接就会被自动关闭，这时候你的插件就会疯狂报错烦死你，建议调大一点。但是太大也不行，否则会严重拖累性能</td><td><code>wait_timeout=28800</code></td><td>86400</td></tr><tr><td><code>interactive_timeout</code></td><td>此项设置 MySQL 关闭一个交互的连接之前所要等待的秒数，需要注意的是， <code>wait_timeout</code> 和 <code>interactive_timeout</code> 需要同时设置，否则不会生效</td><td><code>interactive_timeout=28800</code></td><td>86400</td></tr><tr><td><code>max_allowed_packet</code></td><td>有时候你的插件会告诉你 <code>Package for query is too large</code> 那么这个时候你就需要调大这个值了，这一项规定了 MySQL 传输过程中最大允许的包的大小</td><td><code>max_allowed_packet=1M</code></td><td>看情况</td></tr><tr><td><code>max_connections</code></td><td>这一项设置 MySQL 的最大连接数，如果连接数到达这个数值，就无法创建新的连接，这个时候你的插件通常会报错，告诉你 <code>max_connections</code> 满了</td><td><code>max_connections=90</code></td><td>32768</td></tr></tbody></table></div><h3 id="mariadb" tabindex="-1">MariaDB <a class="header-anchor" href="#mariadb" aria-label="Permalink to &quot;MariaDB&quot;">​</a></h3><p>TODO</p>`,10)]))}const E=n(p,[["render",e]]);export{y as __pageData,E as default};
