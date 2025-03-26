.model small
.stack 100h
.data
 a db 31h
 b db '2'
 c db 51
 d db ?

.code
main proc
    mov ax, @data
    mov ds,ax
    
    mov ah, 2 ;Single character display(variable a)
    mov dl, a
    int 21h
    
    ;new line
    mov ah, 2
    mov dl, 0Ah
    int 21h
    mov dl, 0Dh
    int 21h
    
    mov dl, b  ;Single character display(variable b)
    int 21h
    ;new line
    mov ah, 2
    mov dl, 10
    int 21h
    mov dl, 13                                                                                                                                   
    int 21h
    
    mov dl, c  ;Single character display(variable c)
    int 21h
    ;new line
    mov ah, 2
    mov dl, 10
    int 21h
    mov dl, 13                                                                                                                                   
    int 21h
    
    mov ah,1  ; Single character input
    int 21h
    mov d, al
    ;new line
    mov ah, 2
    mov dl, 10
    int 21h
    mov dl, 13                                                                                                                                   
    int 21h
    
    mov ah,2
    mov dl,d
    int 21h
    
    main endp
end main 
                                                                                                                            