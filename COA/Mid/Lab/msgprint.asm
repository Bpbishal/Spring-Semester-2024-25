.model small
.stack 100h
.data

  msg db "Hello World$" 
  msg1 db "Suuny Day$"
  
  n db "Bishal Paul$"
  i db "22-47036-1$"
  a db "dhaka$"


.code
main proc
    mov ax,@data
    mov ds,ax
    
    mov ah,9  ;for display msg
    lea dx,msg
    int 21h
    
    mov ah,2  ;new line
    mov dl,10
    int 21h
    mov dl,13
    int 21h
    
    mov ah,9
    lea dx,msg1
    int 21h 
    
    mov ah,2
    mov dl,10
    int 21h
    mov dl,13
    int 21h
    
    mov ah,9;display name
    lea dx,n
    int 21h
    
    mov ah,2 ;new line
    mov dl,10
    int 21h
    mov dl,13
    int 21h
    
    mov ah,9 ;display id
    lea dx,i
    int 21h
    
    mov ah,2 ;new line
    mov dl,10
    int 21h
    mov dl,13
    int 21h
    
    mov ah,9 ;display address
    lea dx,a
    int 21h
    
  
    
    main endp
end main