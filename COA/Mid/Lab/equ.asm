.model small
.stack 100h
.data

  msg db "Hello World$" 
  msg1 db "Suuny Day$" 
  msg2 equ "Enter a value: $"
  
  nl equ 10
  cr equ 13


.code
main proc
    mov ax,@data
    mov ds,ax
    
    mov ah,9  ;for display msg
    lea dx,msg
    int 21h 
    
    mov ah,2
    mov dl,nl
    int 21h
    mov dl,cr
    int 21h
    
    mov ah,9
    lea dx, msg2
    int 21h
    
    main endp
end main