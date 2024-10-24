## grep

### 查找匹配 scripts 并显示匹配和下边的 10 行

```
grep -A 10 scripts package.json
```

### 递归查找./所有文件匹配 scripts 并显示行号

```
grep -rn scripts ./
```

### 搜索当前目录下所有文件中包含指定字符串（scripts）的行，并显示上下两行

```
grep -rn -C 2 scripts
```