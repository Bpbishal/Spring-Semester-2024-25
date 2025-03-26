.model small
.stack 100h
.data
 msg1 db "Enter a Number: $"
 msg2 db 10,13,"Greater than 5 $"
 msg3 db 10,13, "Less then 5 $"
 msg4 db 10,13,"Equal to 5 $" 
 var1 db ?
.code
main proc
    mov ax,@data
    mov ds,ax
    
    mov cl,'5'
    
    mov ah,9
    lea dx,msg1
    int 21h
    
    mov ah,1
    int 21h
    mov var1,al
    
    mov ah,2
    mov dl,10
    int 21h
    mov dl,13
    int 21h
    
    cmp var1,cl
    jg bigger
    jl smaller
    je equal
    
    bigger:
    mov ah,9
    lea dx,msg2
    int 21h 
    jmp end
    
    smaller:
     mov ah,9
    lea dx,msg3
    int 21h 
    jmp end
    
    equal:
    mov ah,9
    lea dx,msg4
    int 21h 
    jmp end
    
    end:
    mov ah,4CH
    int 21h
    
    main endp
end main