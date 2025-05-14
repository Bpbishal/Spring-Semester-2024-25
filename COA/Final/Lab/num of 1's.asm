.model small
.stack 100h

.data
msg db "Enter binary value: $"
msg1 db "Output: $"

.code

main proc
    mov ax, @data
    mov ds, ax
    
    ; Prompt user to enter binary value
    mov ah, 9
    lea dx, msg
    int 21h
    
    ; Initialize bx to store binary input and cx to count iterations
    mov bx, 0
    mov cx, 16

input_:
    mov ah, 1
    int 21h
    cmp al, 13          ; Check for Enter key
    je output_

    and al, 0Fh         ; Clear high nibble (to handle only one digit)
    shl bx, 1           ; Shift bx left to make space for the new bit
    or bl, al           ; Set the least significant bit of bx
    loop input_

output_:
    ; Output new line after binary input
    mov dl, 10
    mov ah, 2
    int 21h
    mov dl, 13
    mov ah, 9
    lea dx, msg1
    int 21h

    ; Output binary of the number stored in bx
    mov cx, 16
output_1:
    shl bx, 1           ; Shift left
    jnc zero            ; If no carry, jump to zero
    mov dl, 31h         ; ASCII for '1'
    mov ah, 2
    int 21h
    jmp output_loop

zero:
    mov dl, 30h         ; ASCII for '0'
    mov ah, 2
    int 21h

output_loop:
    loop output_1

    ; Output a new line before the next output (rotate operation)
    mov dl, 10
    mov ah, 2
    int 21h
    mov dl, 13
    mov ah, 2
    int 21h

    ; Now let's perform the rotate operation on BX (hardcoded) and count the number of 1s in it
            ; Hardcoded value for second part
    mov ax, 0           ; Initialize AX to store the count of 1s
    mov cx, 16          ; Set count for 16 iterations

rotate_top:
    rol bx, 1           ; Rotate left through carry
    jnc rotate_next     ; If no carry, skip incrementing AX
    inc ax              ; Increment count of 1s in AX

rotate_next:
    loop rotate_top

    ; Output the result (in AX) as binary
    add ax, '0'         ; Convert to ASCII
    mov dl, al
    mov ah, 2
    int 21h

    ; Exit the program
    mov ah, 4Ch
    int 21h

main endp
end main
