.model small
.stack 100h
.data

msg1 db "Enter a number: $"
msg2 db "Enter another number: $"
msg3 db "The summation: $" 
msg4 db "The sbutraction: $:"  

a db ?
b db ?

.code

main proc
    mov ax, @data
    mov ds,ax
    
    mov ah,9
    lea dx,msg1
    int 21h
    
    mov ah,1
    int 21h
    mov a,al 
    
    mov ah,2
    mov dl,10
    int 21h
    mov dl,13
    int 21h
    
    mov ah,9
    lea dx,msg2
    int 21h
    
    mov ah,1
    int 21h
    mov b,al
    
    mov ah,2
    mov dl,10
    int 21h
    mov dl,13
    int 21h
    
    mov ah,9
    lea dx,msg3
    int 21h
    
    mov bh,b
    add bh,a
    sub bh,30h
    
    mov ah,2
    mov dl,bh
    int 21h 
    
    mov ah,2
    mov dl,10
    int 21h
    mov dl,13
    int 21h
    
    mov ah,9
    lea dx,msg4
    int 21h
    
    mov bh,b
    sub a,bh
    add a,30h
    
    mov ah,2
    mov dl,a
    int 21h
    
    main endp
end main