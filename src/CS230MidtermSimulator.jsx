import React, { useState } from "react";

const questions = [
  {
    number: 1,
    question: "How many bytes are required to store `kaist` and `\"hello\n\"` in the C program on 64-bit Linux?",
    choices: ["11", "12", "15", "16"],
    answer: "16"
  },
  {
    number: 2,
    question: "In which area of virtual memory is the variable `kaist` stored?",
    choices: ["Text", "Data", "Heap", "Stack"],
    answer: "Stack"
  },
  {
    number: 3,
    question: "Where is the dynamically linked `printf()` machine code stored?",
    choices: ["Text", "Kernel area", "Shared Library", "Stack"],
    answer: "Shared Library"
  },
  {
    number: 4,
    question: "In which register is the address of the first argument `\"hello\n\"` stored?",
    choices: ["rsi", "rdi", "rsp", "rax"],
    answer: "rsi"
  },
  {
    number: 5,
    question: "Which program comes third in the C compilation process and what is its role?",
    choices: ["Preprocessor", "Compiler", "Assembler", "Linker"],
    answer: "Assembler"
  },
  {
    number: 6,
    question: "Which ARM model is used in modern smart phones?",
    choices: ["Cortex R", "Cortex M", "SecurCore", "Cortex A"],
    answer: "Cortex A"
  },
  {
    number: 7,
    question: "Choose an Android component implemented in native machine codes.",
    choices: ["Calendar", "Location Manager", "WebKit", "Content Providers"],
    answer: "Content Providers"
  },
  {
    number: 8,
    question: "Which Android Java Class is used to implement a foreground home screen?",
    choices: ["Activity", "Service", "Content Provider", "Intent"],
    answer: "Activity"
  },
  {
    number: 9,
    question: "In what CPU mode does the system run when a network packet arrives?",
    choices: ["User mode", "Kernel mode", "Privileged mode", "Interrupt mode"],
    answer: "Kernel mode"
  },
  {
    number: 10,
    question: "What is the name of the memory element shown as a D latch circuit diagram?",
    choices: ["R-S Latch", "D Latch", "D Flip-Flop", "T Flip-Flop"],
    answer: "D Latch"
  },
  {
    number: 11,
    question: "To keep the outputs of an R-S latch unchanged, what values should be assigned to R and S?",
    choices: ["0 and 0", "0 and 1", "1 and 0", "1 and 1"],
    answer: "0 and 0"
  },
  {
    number: 12,
    question: "MU0 is a 16-bit machine with 12-bit address size. What's the max memory size?",
    choices: ["4KB", "8KB", "12KB", "16KB"],
    answer: "8KB"
  },
  {
    number: 13,
    question: "If MU0 opcode size is 4 bits, how many instructions can it implement?",
    choices: ["4", "8", "15", "16"],
    answer: "16"
  },
  {
    number: 14,
    question: "How many clock cycles to fetch & execute `JGE S` in MU0?",
    choices: ["0", "1", "2", "3"],
    answer: "1"
  },
  {
    number: 15,
    question: "What is the final value of the Program Counter (PC) after execution of the given MU0 program?",
    choices: ["9", "10", "11", "12"],
    answer: "11"
  },
  {
    number: 16,
    question: "Which value should go in the control signal table at (5) for LDA instruction?",
    choices: ["=B", "0", "B+1", "1"],
    answer: "=B"
  },
  {
    number: 17,
    question: "Which byte ordering is used for 0x01234567 stored as 01 23 45 67?",
    choices: ["MSB Endian", "LSB Endian", "Big Endian", "Little Endian"],
    answer: "Big Endian"
  },
  {
    number: 18,
    question: "Compute the address: 0x80(, %ecx, 2), with %ecx=0x200",
    choices: ["0x180", "0x280", "0x380", "0x480"],
    answer: "0x480"
  },
  {
    number: 19,
    question: "What is the purpose of the instruction `addq univ(, %rdi, 8), %rsi` in get_univ_digit()?",
    choices: [
      "It adds the offset for digit access",
      "It accesses the digit directly",
      "It computes the base address of univ[index]",
      "It performs a multiplication with 8"
    ],
    answer: "It computes the base address of univ[index]"
  },
  {
    number: 20,
    question: "After callq 400550, what are the values of RIP, RSP, and M[RSP]?",
    choices: [
      "RIP=400544, RSP=120, M[RSP]=400549",
      "RIP=400550, RSP=118, M[RSP]=400549",
      "RIP=400550, RSP=120, M[RSP]=400544",
      "RIP=400549, RSP=118, M[RSP]=400550"
    ],
    answer: "RIP=400550, RSP=118, M[RSP]=400549"
  },
  {
    number: 21,
    question: "Difference between movq and leaq?",
    choices: [
      "movq loads address, leaq loads value",
      "movq computes address, leaq accesses memory",
      "movq accesses memory, leaq computes address",
      "movq computes address, leaq returns pointer"
    ],
    answer: "movq accesses memory, leaq computes address"
  },
  {
    number: 22,
    question: "Which of the following is NOT in a stack frame?",
    choices: ["Frame pointer", "Saved registers", "Instruction cache", "Arguments"],
    answer: "Instruction cache"
  },
  {
    number: 23,
    question: "What is the binary of TMax in 6-bit two's complement?",
    choices: ["011111", "111111", "100000", "010101"],
    answer: "011111"
  },
  {
    number: 24,
    question: "Given sum_element(i,j) assembly, what are M and N for mat1[M][N]?",
    choices: ["M=5, N=7", "M=6, N=6", "M=7, N=5", "M=4, N=8"],
    answer: "M=5, N=7"
  },
  {
    number: 25,
    question: "What is the address of saved %rbx in the stack frame?",
    choices: ["0x7fffff0", "0x7fffff8", "0x7ffffe0", "0x7ffffd8"],
    answer: "0x7fffff0"
  },
  {
    number: 26,
    question: "movq 8(%rbp), %rdi — is this read or write?",
    choices: ["Read", "Write", "Both", "None"],
    answer: "Read"
  },
  {
    number: 27,
    question: "Is `subl %eax, $5` valid in x86-64?",
    choices: ["Yes", "No", "Depends", "Only on Intel"],
    answer: "No"
  }
];

export default function CS230MidtermSimulator() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [done, setDone] = useState(false);

  const currentQ = questions[current];

  const handleSelect = (choice) => {
    setSelected(choice);
  };

  const handleSubmit = () => {
    if (selected === currentQ.answer) setScore(score + 1);
    if (current + 1 === questions.length) {
      setDone(true);
    } else {
      setCurrent(current + 1);
      setSelected(null);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 text-left">
      <h1 className="text-2xl font-bold mb-6">🧠 CS230 Midterm Simulation</h1>
      {!done ? (
        <div>
          <p className="mb-4 font-medium">
            <span className="text-blue-500">Question {currentQ.number}:</span> {currentQ.question}
          </p>
          <ul className="space-y-2 mb-4">
            {currentQ.choices.map((choice, i) => (
              <li
                key={i}
                className={`border p-2 rounded cursor-pointer hover:bg-gray-100 ${
                  selected === choice ? "bg-blue-100 border-blue-400" : ""
                }`}
                onClick={() => handleSelect(choice)}
              >
                {choice}
              </li>
            ))}
          </ul>
          <button
            onClick={handleSubmit}
            disabled={selected === null}
            className="px-4 py-2 bg-blue-600 text-white rounded disabled:bg-gray-300"
          >
            {current + 1 === questions.length ? "Finish" : "Next"}
          </button>
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-xl font-bold">✅ Simulation Complete!</h2>
          <p className="mt-4">Your score: {score} / {questions.length}</p>
        </div>
      )}
    </div>
  );
}
