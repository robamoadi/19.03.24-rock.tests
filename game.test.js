const assert = require("assert")
const get_result = require("./game")

describe("Testing the rock paper scissors game", () => {
    it('player_1 chose rock and player_2 chose rock', () => {
        const actual = get_result("rock", "rock")
        const expected = "draw"

        assert.strictEqual(actual, expected)
    })
    it('player_1 chose paper and player_2 chose paper', () => {
        const actual = get_result("paper", "paper")
        const expected = "draw"

        assert.deepStrictEqual(actual, expected)
    })
    it('player_1 chose scissors and player_2 chose scissors', () => {
        const actual = get_result("scissors", "scissors")
        const expected = "draw"

        assert.deepStrictEqual(actual, expected)
    })
    it('player_1 chose scissors and player_2 chose rock', () => {
        const actual = get_result("scissors", "rock")
        const expected = "player_2"

        assert.deepStrictEqual(actual, expected)
    })
    it('player_1 chose scissors and player_2 chose paper', () => {
        const actual = get_result("scissors", "paper")
        const expected = "player_1"

        assert.deepStrictEqual(actual, expected)
    })
    it('player_1 chose paper and player_2 chose scissors', () => {
        const actual = get_result("paper", "scissors")
        const expected = "player_2"

        assert.deepStrictEqual(actual, expected)
    })
    it('player_1 chose paper and player_2 chose rock', () => {
        const actual = get_result("paper", "rock")
        const expected = "player_1"

        assert.deepStrictEqual(actual, expected)
    })
    it('player_1 chose rock and player_2 chose scissors', () => {
        const actual = get_result("rock", "scissors")
        const expected = "player_1"

        assert.deepStrictEqual(actual, expected)
    })
    it('player_1 chose rock and player_2 chose paper', () => {
        const actual = get_result("rock", "paper")
        const expected = "player_2"

        assert.deepStrictEqual(actual, expected)
    })
})

describe("Testing syntax errors" , () =>{
    it('player_1 chose the wrong syntax', () =>{
        
        assert.throws(() =>{
            get_result("rock123" , "paper");
        },SyntaxError)
    })
    it('player_2 chose the wrong syntax', () =>{
        
        assert.throws(() =>{
            get_result("rock" , "rocke");
        },SyntaxError)
    })
})

describe('Testing unexpexted Errors' , () =>{
    it("only one paramater was send" , () =>{
        assert.throws(() =>{
            get_result('rock');
        },TypeError)
    })
    it('no paramater was send' , ()=>{
    assert.throws(() =>{
        get_result()
    },TypeError)})
})