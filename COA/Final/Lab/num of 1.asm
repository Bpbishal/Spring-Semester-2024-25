.model small
.stack 100h
.data
msg db "Input Binary: $"
msg1 db 0ah,0dh,"Output: $"
msg2 db 0ah,0dh,"Count: $"
.code
main proc
    mov ax,@data
    mov ds,ax
    
    mov ah,9
    lea dx,msg
    int 21h
    
    mov bx,0
    mov cx,16
    
    Input:
    mov ah,1
    int 21h
    cmp al,13
    je output
    and al,0fh
    shl bx,1
    or bl,al
    loop input
    
    output:
     mov ah,9
     lea dx,msg1
     int 21h
     
     mov cx,16
    print_output:
     rol bx,1
     jnc zero
     mov dl,31h
     mov ah,2
     int 21h
     jmp next_bit
    zero:
     mov dl,30h
     mov ah,2
     int 21h
    next_bit:
     loop print_output
     
     mov ah,9
     lea dx,msg2
     int 21h
     
     mov dx,0
     mov cx,16
     
    num_of_one:
     shl bx,1
     jnc skip
     inc dx
     
    skip:
     loop num_of_one
    print:
    mov ah,2
    add dl,30h
    int 21h
    
    exit:
     mov ah,4ch
     int 21h
     
     main endp
end main