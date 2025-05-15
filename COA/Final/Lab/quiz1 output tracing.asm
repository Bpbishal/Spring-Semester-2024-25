.model small
.stack 100h
.data
m1 db "1st:$"
m2 db 0AH,0dh,"2nd:$"
m3 db 0ah,0dh,"3nd:$"
c1 db ? 
.code
main proc
    mov ax,@data
    mov ds,ax
    mov bh,'A'
    mov cx,8
    mov ah,9
    lea dx,m1
    int 21h
    l1:
    rol bh,1
    mov ah,2
    jnc l2
    mov dl,'1'
    int 21h
    loop l1
    jmp l3 
    l2:
    mov dl,'0'
    int 21h
    loop l1
    l3:
    mov ah,9
    lea dx,m2
    int 21h
    mov ah,2
    sub bh,37h
    cmp bh,10
    jge l4
    mov dl,bh
    add dl,48
    int 21h
    l4:
    mov dl,bh
    add dl,55
    int 21h
    l5:
    mov ah,9
    lea dx,m3
    int 21h
    mov ah,2
    mov c1,bh
    add c1,26h
    mov dl,cl
    int 21h
    mov ah,4ch
    int 21h
    main endp
end main