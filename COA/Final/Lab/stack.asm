.model small
.stack 100h
.data
msg1 db "Input:$"
msg2 db 0dh,0ah, "Output:$"

.code
main proc
    mov ax,@data
    mov ds,ax  
    
    mov ah,9
    lea dx,msg1
    int 21h
    
    mov cx,0
    mov ah,1
    while_:
    int 21h
    cmp al,0dh
    je output
    push ax
    inc cx
    jmp while_
    output:
     mov ah,9
    lea dx,msg2
    int 21h    
    jcxz skip
    jmp print
    print:
    mov ah,2
    pop dx
    int 21h
    loop print
    
    skip:
    mov ah,4ch
    int 21h