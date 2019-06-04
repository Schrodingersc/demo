#功能：文件批量排序重命名
#作者: schrodingersc
#语言: python
import os
path=input('请输入文件路径(结尾加上/)：')
format=input('请输入修改文件格式名：')
prefix=input('请输入文件字母前缀：')
digits=input('请输入文件数字位数：')
#获取该目录下所有文件，存入列表中
f=os.listdir(path)

n=0

def pluszero(zn):
    j=1
    zero='0'
    while j < zn:
        zero+='0'

        j+=1
    return zero;

for i in f:
    
    #设置旧文件名（就是路径+文件名）
    oldname=path+f[n]

    zn=int(digits)-len(str(n+1))
    print(n)
    print('---')
    print(len(str(n)))
    zeronum=pluszero(zn);

    newname=path+prefix+zeronum+str(n+1)+'.'+format
    
    #用os模块中的rename方法对文件改名
    os.rename(oldname,newname)
    print(oldname,'======>',newname)
    
    
    n+=1
