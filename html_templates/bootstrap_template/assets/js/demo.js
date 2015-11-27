
function loadNav(tab) {
  html = '<div class="container">'+
          '<div class="navbar-header">'+
            '<a class="navbar-brand" href="index.html">logo</a>'+
          '</div>'+
          '<div>'+
            '<ul class="nav navbar-nav">'+
               '<li><a href="index.html">导航</a></li>'+
               '<li><a href="grid.html">栅格系统</a></li>'+
               '<li><a href="typography.html">排版</a></li>'+
               '<li><a href="form.html">表单</a></li>'+
               '<li><a href="list.html">列表</a></li>'+
               '<li><a href="components.html">小型组件</a></li>'+
               '<li><a href="class.html">辅助类</a></li>'+
               '<li><a href="glyphicons.html">字体图标</a></li>'+
               '<li><a href="javascripts.html">插件</a></li>'+
                '<li class="dropdown">'+
                  '<a class="dropdown-toggle" data-toggle="dropdown" href="#">'+
                     '实例页面 <span class="caret"></span>'+
                  '</a>'+
                  '<ul class="dropdown-menu">'+
                    '<li><a href="examples/basic.html" target="_blank">基本页面</a></li>'+
                    '<li><a href="examples/theme.html" target="_blank">主题</a></li>'+
                    '<li><a href="examples/frontpage.html" target="_blank">首页</a></li>'+
                    '<li><a href="examples/frontpage2.html" target="_blank">首页2</a></li>'+
                    '<li><a href="examples/login.html" target="_blank">登录</a></li>'+
                    '<li><a href="examples/login2.html" target="_blank">登录2</a></li>'+
                    '<li><a href="examples/admin.html" target="_blank">后台管理</a></li>'+
                    '<li><a href="examples/admin2.html" target="_blank">后台管理2</a></li>'+
                    '<li><a href="examples/modal.html" target="_blank">modal</a></li>'+
                    '<li><a href="#">EJB</a></li>'+
                    '<li class="divider"></li>'+
                    '<li><a href="#">分离的链接</a></li>'+
                  '</ul>'+
                '</li>'+
            '</ul>'+
            '<ul class="nav navbar-nav navbar-right">'+
               '<li><a href="index.html">首页</a></li>'+
            '</ul>'+
          '</div>'+
          '</div>';
  $('#nav').html(html);
  $('#nav').find("a[href='"+tab+".html']").parent().addClass('active');
}