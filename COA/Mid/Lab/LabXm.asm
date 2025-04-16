.model small
.stack 100h
 
.data
    msg1 db "Enter Number 1 : $"
    msg2 db 0DH, 0AH, "Enter Number 2 : $"
    msg3 db 0DH, 0AH, "EVEN $"
    msg4 db 0DH, 0AH, "ODD $"
    msg5 db 0DH, 0AH, "Summation Error $"
    msg7 db 0DH, 0AH, "Input Error $"
    msg6 db 0DH, 0AH, "Summation : $"  
    num1 db ?
    num2 db ?
 
.code
main proc
    mov ax, @data
    mov ds, ax
 
    mov ah, 9     ;msg1
    lea dx, msg1
    int 21h
 
    mov ah, 1     ;input 1
    int 21h
    mov num1, al    
    cmp al, '0'
    jl print_error
    cmp al, '9'
    jg print_error 
    mov ah, 9     ;msg 2
    lea dx, msg2
    int 21h    
    mov ah, 1     ;input 2
    int 21h
    mov num2, al  
    cmp al, '0'     ;input error 
    jl print_error
    cmp al, '9'
    jg print_error  
    mov ah, 9     ;msg 6 , summation
    lea dx, msg6
    int 21h    
    mov bh, num1     ; summation
    add bh, num2
    sub bh, 30h
    mov dl, bh 
    mov ah,2
    int 21h
    cmp dl, '1'    ;checking summation odd 
    je print_odd
    cmp dl, '3'
    je print_odd 
    cmp dl, '5'
    je print_odd
    cmp dl, '7'
    je print_odd 
    cmp dl, '9'
    je print_odd 

 
    cmp dl, '0'     ; checking summation even
    je print_even
    cmp dl, '2'
    je print_even 
    cmp dl, '4'
    je print_even
    cmp dl, '6'
    je print_even
    cmp dl, '8'
    je print_even
 
    mov ah, 9
    lea dx, msg5 
    int 21h
    jmp end
print_error:   
    mov ah, 9
    lea dx, msg7 
    int 21h
    jmp end
 
print_odd:   
    mov ah, 9
    lea dx, msg4 
    int 21h
    jmp end
 
print_even:
    mov ah, 9
    lea dx, msg3
    int 21h
    jmp end
 
end:
    mov ah, 4Ch
    int 21h
 
main endp
end main