.model small
.stack 100h
.data

.code

main proc
    mov bl,07h
    mov bh,02h
    
    sub bl,bh
    add bl,30h
    
    mov ah,2
    mov dl,bl
    int 21h
    
    main endp
end main