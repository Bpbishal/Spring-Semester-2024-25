.model small
.stack 100h
.data
m1 db "1st value :",13,10,'$'
m2 db "2nd value: $"
m3 db "The end $"

.code
main proc
    mov ax, @data
    mov ds, ax

    ; Output character in BH
    mov ah, 2
    mov bh, 41h         ; 'A'
    mov bl, 'a'
    add bl,3         ; 'a'
    mov dl, bh          ; DL = 'A'
    int 21h             ; Print 'A'

    ; New line
    mov ah, 2
    mov dl, 13
    int 21h
    mov dl, 10
    int 21h

    ; Comparison
    cmp bh, bl          ; 'A' < 'a' ? true ? jump to label Less
    jl Less

    ; If not less ? show 2nd value
    mov ah, 9
    lea dx, m2
    int 21h

    mov ah, 2
    mov dl, 35h         ; ASCII '5'
    int 21h

    jmp Done

Less:
    ; Show 1st value
    mov ah, 9
    lea dx, m1
    int 21h

    mov ah, 2
    mov dl, 30h         ; '0'
    inc dl              ; '1'
    inc dl              ; '2'
    int 21h             ; print '2'
    int 21h             ; print '2' again

Done:
    ; Show "The end"
    mov ah, 9
    lea dx, m3
    int 21h

    ; Exit program
    mov ah, 4ch
    int 21h
main endp
end main
