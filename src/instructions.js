/** Instructions **/
instructions = {

"01":"add r/m16/32, r16/32",
"02/r":"add r8, r/m8",
"07":"pop es",
"10/r":"adc r/m8, r8",
"11":"adc r/m16/32, r16/32",
"18":"sbb r/m8, r8",
"24":"and al, imm8",
"29":"sub r/m16/32, r16/32",
"30":"xor r/m8, r8",
"31":"xor r/m16/32, r16/32",
"38/r":"cmp r/m8, r8",
"34":"xor al, imm8",
"40+r":"inc r16/32",
"48+r":"dec r16/32",
"50+r":"push r16/32",
"58+r":"pop r16/32",
"68":"push imm16/32",
"6B/r":"imul r16/32, r/m16/32, imm8",
"72":"jc rel8",
"75":"jnz rel8",
"81/0":"add r/m16/32, imm16/32",
"87":"xchg r16/32, r/m16/32",
"89":"mov r/m16/32, r16/32",
"8A/r":"mov r8, r/m8",
"90":"nop",
"90+r":"xchg r16/32, ax",
"99":"cwd",
"9F":"lahf",
"AA":"stosb",
"AB":"stosw",
"B0+r":"mov r8, imm8",
"B8+r":"mov r16/32, imm16/32",
"C3":"ret",
"C4/r":"les r16/32, m16:16/32",
"C5/r":"lds r16/32, m16:16/32",
"CD":"int imm8",
"D0/3":"rcr r/m8, 1",
"D1/7":"sar r/m16/32, 1",
"E2":"loop rel8",
"E4":"in al, imm8",
"E6":"out imm8, al",
"EB":"jmp rel8",
"F7/3":"neg r/m16/32",
"F7/6":"div r/m16/32",
"FE/0":"inc r/m8",
"FE/1":"dec r/m8",
"FF/4":"jmp r/m16/32"

};
