import { Test, TestingModule } from '@nestjs/testing';
import { TransactionsService } from './transactions.service';
import { TransactionsController } from './transactions.controller';

describe('TransactionsController', () => {
    let transactionsController: TransactionsController;
    let testData: any[] = [
        { id: 1, amount: -10.16, date: new Date("2023-06-16"), payee: "DIGI", note: "note 1", userId: "e43f0893-0bb7-4bcf-827f-c77f2b5f723f", createdAt: new Date("2023-06-20T16:41:25.418Z"), updatedAt: new Date("2023-06-20T16:41:25.418Z") },
        { id: 2, amount: -144.48, date: new Date("2023-06-15"), payee: "EMAG", note: "", userId: "e43f0893-0bb7-4bcf-827f-c77f2b5f723f", createdAt: new Date("2023-06-20T16:41:25.458Z"), updatedAt: new Date("2023-06-20T16:41:25.458Z") },
        { id: 3, amount: -50.6, date: new Date("2023-06-14"), payee: "CFR", note: "note 3", userId: "e43f0893-0bb7-4bcf-827f-c77f2b5f723f", createdAt: new Date("2023-06-20T16:41:25.472Z"), updatedAt: new Date("2023-06-20T16:41:25.472Z") }
    ];

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            controllers: [TransactionsController],
            providers: [
                {
                    provide: TransactionsService,
                    useValue: {
                        findAll(){
                            return testData;
                        }
                    },
                },
            ],
        }).compile();

        transactionsController = app.get<TransactionsController>(TransactionsController);
    });

    describe('findAll', () => {
        it('should return an array of 3 transaction objects', async () => {
            expect(await transactionsController.findAll()).toBe(testData);
        });
    });
});
