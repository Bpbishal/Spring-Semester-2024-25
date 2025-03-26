.model small
.stack 100h
.data
msg1 db "Enter first alphabet: $"
msg2 db "Enter second alphabet: $"
msg3 db "Result: $"

alp1 db ?
alp2 db ?
.code
main proc
    mov ax,@data
    mov ds,ax
    
    mov ah,9  ;display first message
    lea dx,msg1
    int 21h
    
    mov ah,1 ;take user input
    int 21h
    mov alp1,al
    
    mov ah,2 ;new line
    mov dl,10
    int 21h
    mov dl,13
    int 21h  
    
    mov ah,9 ;display second message
    lea dx,msg2
    int 21h
    
    mov ah,1 ;take user input
    int 21h
    mov alp2,al
    
    mov ah,2 ;new line
    mov dl,10
    int 21h
    mov dl,13
    int 21h
    
    mov ah,9 ;display third message
    lea dx,msg3
    int 21h
    
    
    mov ah,2 ;new line
    mov dl,10
    int 21h
    mov dl,13
    int 21h 
    
    mov bh,alp2 ;compare func
    cmp alp1,bh
    jle print
    xchg alp1,bh
    
    print:
    mov ah,2
    mov dl,alp1
    int 21h
    mov ah,2 ;new line
    mov dl,10
    int 21h
    mov dl,13
    int 21h
    
    mov dl,bh
    int 21h
    
    mov ah,4CH
    int 21h
    
    main endp
end main