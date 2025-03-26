.model small
.stack 100h
.data
msg1 db "Enter a letter from the English Alphabet: $"
msg2 db 10, 13, "In small it is: $"
msg3 db 10, 13, "In Capital it is: $"
 
alp db ?
.code
main proc
    mov ax,@data
    mov ds,ax
    
    mov ah,9
    lea dx,msg1
    int 21h
    
    mov ah,1
    int 21h
    mov alp,al
    
    
    cmp alp,'A'
    cmp alp,'Z'
    jge check_sml
    add alp,32
    mov ah, 9
    lea dx, msg2
    int 21h
    jmp print
    
    
    check_sml:
    cmp alp,'a'
    cmp alp,'z'
    sub alp,32
    mov ah, 9
    lea dx, msg3
    int 21h
    
    print:
    mov ah,2
    mov dl,alp
    int 21h
    jmp END
    
    END:
    mov ah,4CH
    int 21h
    
    main endp
end main
    