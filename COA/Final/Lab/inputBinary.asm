.model small
.stack 100h
.data
msg db "Enter a binary value: $"
msg1 db "Output: $" 
.code            

main proc
mov ax,@data
mov ds,ax


    mov ah,9
    lea dx,msg
    int 21h
    
    mov bx,0
    mov cx,16
    
    input_:
    
    mov ah,01h
    int 21h
    cmp al,13; cmp AL,ODH
    je output_
    
    and al,0Fh ; for input 1, it will store the value of al=31h. we need 01h. So we have to clear the last four bits of al. mask will be 0fh. or we can use sub al,30h
    shl bx,1
    or bl,al
       loop input_
                   
       output_:
       mov dl,10
       mov ah,2
       int 21h
       mov dl,13
       int 21h
       mov ah,9
       lea dx,msg1
       int 21h
       
       mov cx,16
       
       output_1:
       shl bx,1
       jnc zero  ; if carry=0 then jump level zero
       mov dl,31h; if carry=0 then print 1. mov dl,31h
       mov ah,02
       int 21h
       jmp output_loop
       zero:
       mov dl,30h
       mov ah,2
       int 21h

       output_loop:
       loop output_1