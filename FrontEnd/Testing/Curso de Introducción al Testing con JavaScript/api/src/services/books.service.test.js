const { generateManyBook } = require('../fakes/books.fake');
const BooksService = require('./books.service');

const mockGetAll = jest.fn();

// eslint-disable-next-line implicit-arrow-linebreak, arrow-body-style
jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => ({ getAll: mockGetAll, create: () => {} })));

describe('tests for BookService', () => {
    let service;

    beforeEach(() => {
        service = new BooksService();
        jest.clearAllMocks();
    });

    describe('tests for getBooks', () => {
        test('should returns a list books', async () => {
            // Arrange
            const fakeBooks = generateManyBook(4);
            mockGetAll.mockResolvedValue(fakeBooks);
            // Act
            const books = await service.getBooks({});
            // eslint-disable-next-line no-console
            console.log(books);
            // Assert
            expect(books.length).toEqual(fakeBooks.length);
            expect(mockGetAll).toHaveBeenCalled();
            expect(mockGetAll).toHaveBeenCalledTimes(1);
            expect(mockGetAll).toHaveBeenCalledWith('books', {});
        });

        test('should returns a list books', async () => {
            // Arrange
            const fakeBooks = generateManyBook(2);
            mockGetAll.mockResolvedValue(fakeBooks);
            // Act
            const books = await service.getBooks({});
            // eslint-disable-next-line no-console
            console.log(books);
            // Assert
            expect(books[0].name).toEqual(fakeBooks[0].name);
        });
    });
});
