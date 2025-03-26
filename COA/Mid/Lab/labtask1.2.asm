.model small
.stack 100h
.data
msg1 db "Enter a number: $"
msg2 db 10,13,"ODD$"
msg3 db 10,13,"EVEN$"
msg4 db 10,13,"UNKNOWN$"

num db ?
.code
main proc
    mov ax,@data
    mov ds,ax
    
    mov ah,9
    lea dx,msg1
    int 21h
    
    mov ah,1
    int 21h
    mov num,al
    
    cmp num,'1'
    je print_odd
    cmp num,'3'
    je print_odd
    
    cmp num,'2'
    je print_even
    cmp num,'4'
    je print_even
    
    mov ah,9
    lea dx,msg4
    int 21h
    jmp END
    
    print_odd:
    mov ah,9
    lea dx,msg2
    int 21h
    jmp END 
    
    print_even:
    mov ah,9
    lea dx,msg3
    int 21h
    jmp END 
    
    END:
    mov ah,4ch
    int 21h
    
    main endp
end main