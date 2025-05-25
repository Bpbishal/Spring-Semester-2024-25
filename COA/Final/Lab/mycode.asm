.model small
.stack 100h
.code
main proc
    mov bx,0
    mov cl,4
    mov ah,1
    Input:
    int 21h
    cmp al,0dh
    je output
    cmp al,41h
    jge letter
    and al,0fh
    
    letter:
    sub al,37h
    
    shift:
    shl bx,cl
    or bl,al
    jmp Input
    
    output:
    mov ah,2
    mov al,0dh 
    int 21h
    mov dl,0ah
    int 21h
    
    mov cx,4
    mov ah,2
    
    for2:
    mov dl,bh
    shr dl,4
    rol bx,4
    cmp dl,10
    jge outputLetter
    
    
    add dl,30h
    int 21h
    jmp exit2
    
    outputLetter:
    add dl,37h
    int 21h
    
    exit2:
    loop for2
    
    mov ah,4ch
    int 21h
    
    main endp
end main