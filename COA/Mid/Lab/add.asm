.model small
.stack 100h
.data 
 
.code
 main proc
    mov bl, 02h
    mov bh,03h
    
    add bh,bl
    mov bl,04h
    add bh,bl 
    
    add bh,30h
    
    
    mov ah,2
    mov dl,bh
    int 21h
    
    
    
    main endp
 end main
   