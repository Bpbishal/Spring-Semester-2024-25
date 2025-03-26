.model small
.stack 100h
.data
msg db "Hello World",10,13 ,'$'
.code
main proc
    mov ax,@data
    mov ds,ax
    
    mov cx,5
    
    display:
    mov ah,9
    lea dx,msg
    int 21h 
    dec cx
    jcxz END
    jmp display
    
    END:
    mov ah,4CH
    int 21h 
    
    main endp
end main
   